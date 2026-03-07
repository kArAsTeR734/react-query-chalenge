export default function getTotalPages(arrayLength:number, limit:number){
  return Math.ceil(arrayLength / limit);
}