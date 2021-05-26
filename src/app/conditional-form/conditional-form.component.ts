import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditional-form',
  templateUrl: './conditional-form.component.html',
  styleUrls: ['./conditional-form.component.css'],
})
export class ConditionalFormComponent implements OnInit {
  displayForm = true;
  ages: number[] = [];
  countries = [];
  selectedCountry = '';
  users = [
    { name: 'john', phone: '22222', salary: 2000, doj: new Date(2010, 3, 4) },
    { name: 'TOM', phone: '888', salary: 5000, doj: new Date(2000, 3, 24) },
    {
      name: 'alex',
      phone: '90909090',
      salary: 50000,
      doj: new Date(2020, 3, 14),
    },
  ];
  maskedusers = [];
  constructor() {}

  ngOnInit(): void {
    this.ages = [16, 17, 18, 19, 20];
    this.countries = [
      {
        country: 'India',
        flag: 'https://lh3.googleusercontent.com/proxy/RoNJZ7NmsU9sLv6OPnbHoRoTDyHLu7cKksfrNQ5QnGftBWRUzrPRWH7J8ek2ZgF41FfcBT3oD-Hc6EZbstTyQS79hm-UNNuzewi_ON-hyAPb9w',
      },
      {
        country: 'US',
        flag: 'https://www.transparentpng.com/thumb/american-flag/which-flag-has-the-best-design-3.png',
      },
    ];
    this.maskedusers = this.users.map((user) => {
      // let ph: any = user.phone;
      let len = user.phone.length;
      let mask = '';
      for (let i = 0; i < 2 * len; i++) {
        mask += '*';
      }
      // user['name'] = user.name.toUpperCase();
      user['masked_phone'] = mask;
      return user;
    });
  }
  setAge(e) {
    console.log(e.target.value);
    this.displayForm = e.target.value >= 18 ? true : false;
  }
}
