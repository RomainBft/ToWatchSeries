export class SeriesState {
    loading : boolean
    categories: Array<String> | null
    platforms: Array<String> | null
    
    constructor() {
        this.loading = false,
        this.categories = null,
        this.platforms = null
    }
}