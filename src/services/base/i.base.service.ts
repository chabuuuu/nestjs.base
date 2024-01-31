export interface IBaseService<T> {
    findAll(params: any): Promise<any>;
    
    findOne(params: any): Promise<T>;

    store(data: any): Promise<T>;
  
    update(params: any): Promise<T>;
  
    delete(params: any): Promise<T>;
  }
  