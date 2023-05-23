<template>
    <div class="text-input">
            <input ref="inputField" type="text" v-model="inputValue"  :maxlength="maxChars"
            :class="{ 'input-field': true, 'expanded': isExpanded }" placeholder="Enter text" @focus="expandInput"
            @blur="shrinkInput" @input="handleInput"  @keydown="handleAutocompleteListKeyDown($event)" />
            <span class="tag-limit-warning" v-show="showTagLimitWarning">You're using more than 2 tags in your search, please log in or you will likely get an error.</span>
            <ul ref="autocompleteList" v-show="this.showAutocomplete" class="autocomplete-list" >
                <li v-for="(result, index) in autoCompleteResults" :key="result.label"
                    :class="['autocomplete-item', getCategoryClass(result.category), { selected: index === selectedItemIndex }]"
                    @click="addTag(result.label)">
                    <span class="autocomplete-label">{{ result.label }}</span>
                    <span class="post-count">{{ result.post_count.formatPostCount() }}</span>
                </li>
        </ul>
    </div>
</template>
  
<script>
import axios from 'axios';
import StringUtils from './../../../Util/StringUtils';
import { inject } from 'vue';
import { mapActions } from 'vuex';

export default {
    inject: ['DBooruService'],
    data() {
        return {
            inputValue: '',
            maxChars: 255,
            isExpanded: false,
            showAutocomplete: false,
            showTagLimitWarning: false,
            autoCompleteResults: [], // Holds the auto-complete results
            selectedItemIndex: -1
        };
    },
    methods: {
        resetAutocomplete() {
            this.autoCompleteResults = [];
            this.showAutocomplete = false;
        },
        expandInput() {
            this.isExpanded = true;
        },
        shrinkInput(selected) {
            setTimeout(() => { 
                this.isExpanded = false;
                this.showAutocomplete = false; 
            } , 100);
        },
        addTag(tag) {
            tag = tag.replaceAll(" ", "_");
            this.inputValue = this.inputValue.insertTagAt(tag, this.getCaretPosition());
            this.isExpanded = false;
            this.resetAutocomplete();
        },
        selectItem(index) {
            this.selectedItemIndex = index;
        },
        selectNextItem() {
            if(this.selectedItemIndex > this.autoCompleteResults.length - 2) {
                this.selectedItemIndex = 0;
                return;
            }
            this.selectedItemIndex++;
        },
        selectPreviousItem() {
            if(this.selectedItemIndex == 0) {
                this.selectedItemIndex = this.autoCompleteResults.length - 1;
                return;
            }
            this.selectedItemIndex--;
        },
        handleAutocompleteListKeyDown(event) {
            if(this.selectedItemIndex == -1) this.selectedItemIndex = 0;
            switch (event.key) {
                case 'ArrowUp':
                    event.preventDefault();
                    this.selectPreviousItem();
                break;
                case 'ArrowDown':
                    event.preventDefault();
                    this.selectNextItem();
                break;
                case 'Enter':
                case 'Tab':
                    event.preventDefault();
                    if(this.autoCompleteResults.length > 0) {
                        this.addTag(this.autoCompleteResults[this.selectedItemIndex].label);
                    } else {
                        this.fetchPosts();
                    }
                break;
            }
        },
        async handleInput() {
            this.showAutocomplete = true;
            const inputText = this.getWordBeforeSpace();
            if(this.inputValue.length === 0) {
                this.showAutocomplete = false;
                return;
            }

            if (this.inputValue.charAt(this.inputValue.length-1) === ' ') {
                this.resetAutocomplete();
                return;
            }

            this.isExpanded = true;
            this.showTagLimitWarning = false;

            if (this.inputValue.split(" ").length > 2) {
                this.showTagLimitWarning = true;
            }

            const response = await this.DBooruService.fetchAutocomplete(inputText);
            if(response !== undefined) {
                this.autoCompleteResults = response.data;
            }
            

        },
        getCategoryClass(category) {
            const categoryColors = {
                0: 'tag', // Category Tag color
                1: 'artist', // Category Artist color
                2: 'tag', // Category Tag color
                3: 'copyr', // Category Copyright color
                4: 'char',  // Category Character color
                5: 'metad'  // Category Metadata color
            };

            return categoryColors[category];
        },
        getCaretPosition() {
            const input = this.$refs.inputField;
            return input.selectionStart;
        },
        getWordBeforeSpace() {
            const input = this.$refs.inputField;
            const inputValue = input.value;
            const caretPosition = input.selectionStart;

            let endIndex = caretPosition - 1;
            while (endIndex >= 0 && inputValue[endIndex] !== ' ') {
                endIndex--;
            }

            const substring = inputValue.substring(endIndex + 1, caretPosition);
            return substring;
        },
        ...mapActions(['setPosts']),
        async fetchPosts() {
            const posts = await this.DBooruService.fetchPosts(this.inputValue);
            //console.log(posts.map(p => {return{'id': p.id, 'file_url': p.file_url}}));
            this.DBooruService.state.posts = posts; // Update the posts in the postListService
            this.setPosts(posts);
        } 

    }
};
</script>
  
<style lang="scss">
    .text-input {
    position: relative;
    width: 255px;

    display: flex;
    flex-direction: column;
    .input-field {
        border: none;
        border-bottom: 3px solid $bg-lines-color;
        outline: none;
        width: 80%;
        padding-bottom: 5px;
        padding-right: 5px;
        font-size: 20px;
        background: none;
        color: $txt-color;
        transition: all 0.3s ease;

        &.expanded {
            transition: all 0.3s ease;
            font-size: 24px;
            border-bottom: 3px solid $primary-color;
            padding-right: 20px;
        }
    }

    .line {
        width: 100%;
        height: 1px;
        background-color: $bg-lines-color;
        transition: all 0.3s ease;

            &.expanded {
                background-color: $primary-color;
                height: 2px;
            }
        }
}

    .autocomplete-list {
        display: block;
        list-style-type: none;

        margin: 0;
        padding: 0;

        border: 1px solid $secondary-color;

        background-color: adjust-color($color: $bg-color, $lightness: 1%, $alpha: 1.0)
    }

    .autocomplete-item {
        padding: 1px 1px;

        .autocomplete-label {
            padding-left: 8px;
            box-decoration-break: clone;
            -webkit-box-decoration-break: clone;
        }

        .post-count {
            float: right;
            padding-right: 8px;
        }

        &:hover,
        &.selected {
            cursor: pointer;
            background-color: adjust-color($color: $bg-color, $lightness: 10%, $alpha: 1.0);
        }
        
    }

    /* Category color classes */
    .category-0 {
        color: #FF0000;
    }

    .category-1 {
        color: #00FF00;
    }

    .category-2 {
        color: #0000FF;
    }

    .category-3 {
        color: #FFFF00;
    }

    .category-4 {
        color: #FF00FF;
    }

    .tag-limit-warning {
        margin-top: 8px;
        font-size: 14px;
        color: #CA0000;
    }
</style>