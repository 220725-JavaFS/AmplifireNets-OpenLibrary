import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageSizePipe'
})
export class ImageSizePipePipe implements PipeTransform {

  transform(imgUrl: string, size: string): string {
    if (size === 'medium') {
      let re = /small/;
      return imgUrl.replace(re, 'medium');
    } else if (size === 'small') {
      let re = /medium/;
      return imgUrl.replace(re, 'small')
    }
    console.log('No image for this book');
    return "";
  }

}
