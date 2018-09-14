import { NgModule } from '@angular/core';
import { MatCardModule, MatMenuModule, MatButtonModule, MatCheckboxModule, MatSelectModule } from '@angular/material';

@NgModule({
  imports: [MatCardModule, MatMenuModule, MatButtonModule, MatCheckboxModule, MatSelectModule],
  exports: [MatCardModule, MatMenuModule, MatButtonModule, MatCheckboxModule, MatSelectModule],
})

export class NewsMaterialModule { }
