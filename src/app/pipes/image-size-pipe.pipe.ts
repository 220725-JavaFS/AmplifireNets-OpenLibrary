import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageSizePipe'
})
export class ImageSizePipePipe implements PipeTransform {

  transform(imgUrl: string, size: string): string {
    let re: RegExp;
    if (size === 'medium') {
      re = /small/;
      return imgUrl.replace(re, size);
    } else if (size === 'small') {
      re = /medium/;
      return imgUrl.replace(re, size);
    }
    console.log("No image for this book");
    return "";
  }

}
