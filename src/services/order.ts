import { Observable } from 'rxjs';

import { IPaginationParams, IPaginationResponse } from 'interfaces/pagination';
import IOrder from 'interfaces/models/order';

import apiService, { ApiService } from './api';

class OrderService {
  constructor(private apiService: ApiService) {}

  public list(params: IPaginationParams): Observable<IPaginationResponse<IOrder>> {
    return this.apiService.get('/order', params);
  }
  public save(model: Partial<IOrder>): Observable<IOrder> {
    return this.apiService.post('/order', model);
  }

  public delete(id: number): Observable<void> {
    return this.apiService.delete(`/order/${id}`);
  }
}

const orderService = new OrderService(apiService);

export default orderService;
