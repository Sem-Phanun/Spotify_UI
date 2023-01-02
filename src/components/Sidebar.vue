<template>
    <div class="bg-gray-600 h-[80%] w-[14rem] pt-5">
        <div class="w-auto">
            <router-link to="/">
                <img src="@/assets/image/Spotify_Logo_RGB_White.png" 
                    alt="" 
                    class="h-10 w-auto ml-4">
            </router-link>
        </div>


        <div class="ml-4 mt-6 hover:text-white">
            <router-link to="/">
                <font-awesome-icon icon="fa-solid fa-house" class="h-5 w-5"/>
                <span class="ml-4 capitalize font-bold">home</span>
            </router-link>
        </div>


        <div class="ml-4 mt-4 hover:text-white">
            <router-link to="/search">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="h-5 w-5"/>
                <span class="ml-4 capitalize font-bold">search</span>
            </router-link>
        </div>

        <div class="ml-4 mt-4 hover:text-white">
            <router-link to="/library">
                <font-awesome-icon icon="fa-solid fa-layer-group" class="h-5 w-5"/>
                <span class="ml-4 capitalize font-bold">library</span>
            </router-link>
        </div>

        <div class="ml-4 mt-8 hover:text-white">
            <router-link to="/playlists">
                <font-awesome-icon icon="fa-solid fa-plus" class="hover:bg-white h-5 w-5 p-[.1rem] rounded text-black bg-gray-300"/>
                <span class="ml-4 capitalize font-bold">create playlists</span>
            </router-link>
        </div>

        <div class="ml-4 mt-4 hover:text-white">
            <router-link to="">
                <font-awesome-icon icon="fa-solid fa-heart" class="h-4 w-4 p-1 rounded bg-gradient-to-tr from-blue-500 via-cyan-500 to-neutral-50"/>
                <span class="font-bold ml-4 capitalize">liked songs</span>
            </router-link>
        </div>
    </div>
</template>

<script>
    
</script>

<style lang="scss" scoped>

</style>