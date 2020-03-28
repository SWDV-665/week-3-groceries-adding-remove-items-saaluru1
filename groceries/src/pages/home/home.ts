import { Component } from '@angular/core';
import { NavController, ToastController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = "Grocery Store";

items = [
  {
    name : "Milk",
    quantity : 1,
    price : "$2.99" 
  },
  {
    name : "Eggs",
    quantity : 36,
    price : "$14.49" 
  },
  {
    name : "Bread",
    quantity : 5,
    price : "$7.98" 
  }

];

removeItem(item, index) {
  console.log("Removing Item - ", item, index);
  const toast = this.toastCtrl.create({
    message: 'Removing Item - ' + index + " ...",
    duration: 3000
  });
  toast.present();

  this.items.splice(index, 1);
}

addItem() {
  console.log("Adding Item");
  this.showAddItemPrompt();
}

showAddItemPrompt() {
  const prompt = this.alertCtrl.create({
    title: 'Add Item',
    message: "Please enter item...",
    inputs: [
      {
        name: 'name',
        placeholder: 'Name'
      },
      {
        name: 'quantity',
        placeholder: 'Quantity'
      },
      {
        name: 'price',
        placeholder: 'Price'
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: item => {
          console.log('Saved clicked', item);
          this.items.push(item);
        }
      }
    ]
  });
  prompt.present();
}
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }

}
