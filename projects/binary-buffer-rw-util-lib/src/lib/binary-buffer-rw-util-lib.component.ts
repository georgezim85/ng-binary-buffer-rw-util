import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-binary-buffer-rw-util-lib',
  template: `
    <p>
      binary-buffer-rw-util-lib works!
    </p>
  `,
  styles: [
  ]
})
export class BinaryBufferRwUtilLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // convertDec2binString(1616165571) results '1100000010101001011101011000011'
  convertDec2binString(number: number) {
    return this.dec2bin(number).padStart(8, '0');
  }

  dec2bin(dec: number){
    return (dec >>> 0).toString(2);
  }

  bin2dec(bin: string){
    return parseInt(bin, 2).toString(10);
  }

  convertUint8Array2Number(byteArray: Uint8Array): number {
    let number = 0;
    for (let i = 0; i < byteArray.length; i++) {
      number <<= 8;
      number |= byteArray[i];
    }
    return number;
  }

}