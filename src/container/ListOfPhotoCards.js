// Tips: Los container se encargan de hacer los Fetching de nuestros datos

import { withPhotos } from '../hoc/withPhotos'
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCard'

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)