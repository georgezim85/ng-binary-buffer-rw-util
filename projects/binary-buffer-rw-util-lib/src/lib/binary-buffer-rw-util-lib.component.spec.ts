import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinaryBufferRwUtilLibComponent } from './binary-buffer-rw-util-lib.component';

describe('BinaryBufferRwUtilLibComponent', () => {
  let component: BinaryBufferRwUtilLibComponent;
  let fixture: ComponentFixture<BinaryBufferRwUtilLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BinaryBufferRwUtilLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BinaryBufferRwUtilLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('convert decimal to binary string', () => {
    // e.g. decimal 1616165571   =>  binary 1100000010101001011101011000011
    // console.log(byteArray);    // Uint8Array{0: 192, 1: 169, 2: 117, 3: 67
    expect(component.convertDec2binString(192)).toEqual('11000000');
    expect(component.convertDec2binString(169)).toEqual('10101001');
    expect(component.convertDec2binString(117)).toEqual('01110101');
    expect(component.convertDec2binString(67)).toEqual( '01000011');

    expect(component.convertDec2binString(1616165571)).toEqual('1100000010101001011101011000011');
  });

  it('convert Uint8 (binary format) to binary string', () => {
    expect(component.convertDec2binString(0b11000000)).toEqual('11000000');
    expect(component.convertDec2binString(0b10101001)).toEqual('10101001');
    expect(component.convertDec2binString(0b01110101)).toEqual('01110101');
    expect(component.convertDec2binString(0b01000011)).toEqual('01000011');
  });

  it('convert Uint8Array to number', () => {
    let byteArray = new Uint8Array(4);
    byteArray[0] = 0b01100000;
    byteArray[1] = 0b01010100;
    byteArray[2] = 0b10111010;
    byteArray[3] = 0b11000011;
    expect(component.convertUint8Array2Number(byteArray)).toEqual(1616165571);
  });

  it('convert binary to decimal string', () => {
    expect(component.bin2dec('1110101')).toEqual('117');
  });

  it('convert decimal to binary string', () => {
    expect(component.dec2bin(117)).toEqual('1110101');
  });
});
