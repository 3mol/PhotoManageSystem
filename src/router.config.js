import PhotosLayout from './components/layout/ImageLayout.vue'
import AlbumsLayout from './components/layout/AlbumsLayout.vue'

export default {
	routes: [
		{ path: '/', component: PhotosLayout },
		{ path: '/photos', component: PhotosLayout },
		{ path: '/albums', component: AlbumsLayout },
		{ path: '/searchPhotos', component: PhotosLayout },
		{ path: '/searchAlbums', component: AlbumsLayout }
	]
}