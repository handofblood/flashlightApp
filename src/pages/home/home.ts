import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Flashlight} from '@ionic-native/flashlight';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
isOn: boolean = false;
    constructor(private flashlight: Flashlight, navCtrl: NavController) {

    }

    async isAvailable(): Promise<boolean> {
        try {
            return await this.flashlight.available();
        }
        catch (e) {
          console.log(e);

        }
    }
    async toggleFlash():Promise<void>
    {
      try {
          let available = await this.isAvailable();
          if (available){
            await this.flashlight.toggle();
            this.isOn=!this.isOn;
          }
          else {
            console.log("isnt Avialable");
          }
      }
      catch (e) {
          console.log(e);
      }
    }

    // async turnOnFlash():Promise<void>
    // {
    //     await this.flashlight.switchOn();
    // }
    // async turnOffFlash():Promise<void>
    // {
    //     await this.flashlight.switchOff();
    // }
    // async isFlashOn():Promise<boolean>
    // {
    //    return await this.flashlight.isSwitchedOn();
    // }

}
