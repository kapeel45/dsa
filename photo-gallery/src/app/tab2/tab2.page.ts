import { PhotoService } from '../services/photo.service';
import { AlertController } from '@ionic/angular';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @Input() text : any;
  constructor(public photoService: PhotoService, private alertController:AlertController) {}

  async promptForPhotoName(){
    const alert = await this.alertController.create({
      header: 'Name Your Photo',
      inputs:[
        {
          name: 'photoName',
          type: 'text',
          placeholder: 'Enter photo name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role:'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancel Clicked');
          }
        },{
          text:'OK',
          handler: (data)=>{
            if(data.photoName){
              this.addPhotoToGallery(data.photoName);
            }
          }
        }
      ]
    });

    await alert.present();

  }

  addPhotoToGallery(photoName: string){
    this.photoService.addNewToGallery(photoName);
  }
  
  async ngOnInit() {
    await this.photoService.loadSaved();
  }

}
