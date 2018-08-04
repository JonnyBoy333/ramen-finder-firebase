import { IRamen } from '../store/IStoreState';
export function fetchRamenAPI(zip: string): Promise<IRamen[]> {
  return fetch(`./api/ramen?zip=${zip}`)
    .then(res => res.json())
    .then(res => res.businesses)
}