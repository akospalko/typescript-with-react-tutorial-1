export interface IWatchCollection { //Interface for an array of objects
    watches: {
      name: string,
      url: string,
      price: number,
      description?: string    
    }[]
};