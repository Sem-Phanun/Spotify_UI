<template>
    <div class="bg-black h-[90%] w-[14rem] pt-5">
        <!-- logo -->
        <div class="w-auto">
            <router-link to="/">
                <img src="@/assets/image/Spotify_Logo_RGB_White.png" 
                    alt="" 
                    class="h-10 w-auto ml-4">
            </router-link>
        </div>

        <!-- link___to___home___page -->
        <div class="ml-4 mt-6 hover:text-white">
            <router-link to="/">
                <font-awesome-icon icon="fa-solid fa-house" class="h-5 w-5"/>
                <span class="ml-4 capitalize font-bold">home</span>
            </router-link>
        </div>


        <!-- link___to___search___page -->
        <div class="ml-4 mt-4 hover:text-white">
            <router-link to="/search">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="h-5 w-5"/>
                <span class="ml-4 capitalize font-bold">search</span>
            </router-link>
        </div>


        <!-- link___to___library___page -->
        <div class="ml-4 mt-4 hover:text-white">
            <router-link to="/library">
                <font-awesome-icon icon="fa-solid fa-layer-group" class="h-5 w-5"/>
                <span class="ml-4 capitalize font-bold">library</span>
            </router-link>
        </div>


        <!-- playlist___page -->
        <div class="ml-4 mt-8 hover:text-white">
            <router-link to="/playlists">
                <font-awesome-icon icon="fa-solid fa-plus" class="hover:bg-white h-5 w-5 p-[.1rem] rounded text-black bg-gray-300"/>
                <span class="ml-4 capitalize font-bold">create playlists</span>
            </router-link>
        </div>


        <!-- fav____songs___page -->
        <div class="ml-4 mt-4 hover:text-white hover:opacity-100">
            <router-link to="">
                <font-awesome-icon icon="fa-solid fa-heart" class="h-4 w-4 p-1 rounded bg-gradient-to-r from-fuchsia-500 to-cyan-500 opacity-75 hover:opacity-100"/>
                <span class="font-bold ml-4 capitalize">liked songs</span>
            </router-link>
        </div>


        <div class="ml-4 h-px w-[80%] bg-gray-800 my-3"></div>

        <!-- albums___list -->
        <div class="ml-4">
            <div class=" w-full opacity-75 hover:opacity-100 h-16 scrollbar overflow-y-scroll cursor-default">
                <p v-for="playList in playLists" :key="playList" class="hover:text-white">
                    {{ playList.title }}
                </p>
                <h3 class="capitalize font-semibold mt-2 text-sm">albums</h3>
            </div>
        </div>


        <div class="ml-4 mt-3 cursor-pointer hover:text-white">
            <font-awesome-icon icon="fa-regular fa-circle-down" class="h-6 w-6"/>
            <span class="ml-4 capitalize">install app</span>
        </div>


        <div class="mt-2 h-[auto] w-full cursor-pointer">
            <img src="../assets/image/albums/maroon 5.jpg" alt="">
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import Playlists from '../views/Playlists.vue'

export default {
    setup () {
        const albums = ref ('')
        
        const playLists = ref([
                {title:'Vannda'},
                {title: 'This is Maroon 5'},
                {title: 'Four(Deluxe)'},
                {title: 'TEN DO Mix'},
                {title: 'This is JustinBieber'}
            ])

        return {
            playLists
        }
    }
}


</script>