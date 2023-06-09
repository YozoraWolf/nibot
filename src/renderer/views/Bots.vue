<template>
    <div class="main-cont">
        <div class="bots-cont">
            <ul class="bot-list">
            </ul>
            <div class="bot-sett"></div>
        </div>
        <div class="buttons">
            <div class="add-bot"><span>+</span></div>
            <div class="delete-bot"><span>-</span></div>
        </div>
    </div>
</template>

<script>
export default {


}
</script>

<style scoped lang="scss">
.main-cont {

    width: auto; 
    height: 100%;

    .bots-cont {
        display: flex;
        flex-direction: row;

        height: 100%;

        .bot-list {
            border: 1px solid $bg-lines-color;
            border-radius: $border-round;
            width: 180px;
            height: 100%;
        }
    }

    .buttons {
        margin-top: 25px;

        div {
            float: right;
            margin-left: 5px;
            width: 32px;
            height: 32px;
            font-size: 28px;
            
            border: none;
            transition: text-shadow 0.3s ease;

            span {
                transition: text-shadow 0.3s ease;
            }

            &:hover {
                cursor: pointer;

                span {
                    text-shadow: 1px 1px 8px white;
                }
            }
        }
    }
}
</style>