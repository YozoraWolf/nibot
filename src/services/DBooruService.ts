import { reactive, toRef } from 'vue';
import axios from 'axios';

const DBooruService = {
  state: reactive({
    posts: []
  }),

  async fetchAutocomplete(query: []) {
    let response: any = {};
    if(query.length == 0 || query == undefined) {
        response = [];
        console.error("Query is empty or undefined.");
    }
    try {
        response = await axios.get(`https://danbooru.donmai.us/autocomplete.json?search[query]=${query}&search[type]=tag_query&version=1&limit=6`);
        if(response.data.length === 0) return;
        //console.log(`Input: https://danbooru.donmai.us/autocomplete.json?search[query]=${query}&search[type]=tag_query&version=1&limit=3`);
    } catch (error) {
        console.error(error);
        response = [];
    }
    return response;
  },

  async fetchPosts(tags: string) {
    if (!tags || tags.trim() === '') {
      console.error("Tags are empty or undefined.");
      return []; // Return empty list if tags are empty or undefined
    }

    const formattedTags = tags.replace(/\s+/g, '+'); // Replace spaces with "+"

    try { 
      const response = await axios.get(`https://danbooru.donmai.us/posts.json?tags=${formattedTags}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return []; // Return empty list on error 
    }
  }
};

export default DBooruService;