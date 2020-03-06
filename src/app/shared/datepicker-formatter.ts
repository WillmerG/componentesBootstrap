import { Injectable } from "@angular/core";
import { NgbDateParserFormatter, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { stringify } from 'querystring';

@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {

  readonly DELIMITER = '/';

  private ceros(xnumero: number): string {
    return xnumero <= 9 ? "0"+xnumero.toString() : xnumero.toString();
  }

  parse(value: string): NgbDateStruct {
    let result: NgbDateStruct = null;
    if (value) {
      let date = value.split(this.DELIMITER);
      result = {
        day : parseInt(date[0], 10),
        month : parseInt(date[1], 10),
        year : parseInt(date[2], 10)
      };
    }
    return result;
  }

  format(date: NgbDateStruct): string {
    let result: string = null;
    if (date) {
      result = this.ceros(date.day) + this.DELIMITER + this.ceros(date.month) + this.DELIMITER + this.ceros(date.year);
    }
    return result;
  }
}


// @Injectable()
// export class CustomDateParserFormatter extends NgbDateParserFormatter {
//   parse(value: string): NgbDateStruct {
//     if (value) {
//       const dateParts = value.trim().split('/');
//       if (dateParts.length === 1 && this.isNumber(dateParts[0])) {
//         return { year: this.toInteger(dateParts[0]), month: null, day: null };
//       } else if (dateParts.length === 2 && this.isNumber(dateParts[0]) && this.isNumber(dateParts[1])) {
//         return { year: this.toInteger(dateParts[1]), month: this.toInteger(dateParts[0]), day: null };
//       } else if (dateParts.length === 3 && this.isNumber(dateParts[0]) && this.isNumber(dateParts[1]) && this.isNumber(dateParts[2])) {
//         return { year: this.toInteger(dateParts[2]), month: this.toInteger(dateParts[0]), day: this.toInteger(dateParts[1]) };
//       }
//     }
//     return null;
//   }

//   format(date: NgbDateStruct): string {
//     let stringDate: string = "";
//     if (date) {
//       stringDate += this.isNumber(date.day) ? this.padNumber(date.day) + "/" : "";
//       stringDate += this.isNumber(date.month) ? this.padNumber(date.month) + "/" : "";
//       stringDate += date.year;
//     }
//     return stringDate;
//   }

//   private padNumber(value: number) {
//     if (this.isNumber(value)) {
//       return `0${value}`.slice(-2);
//     } else {
//       return "";
//     }
//   }

//   private isNumber(value: any): boolean {
//     return !isNaN(this.toInteger(value));
//   }

//   private toInteger(value: any): number {
//     return parseInt(`${value}`, 10);
//   }
// }