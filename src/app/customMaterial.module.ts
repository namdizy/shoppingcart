/**
 * Created by Theodore on 5/2/2017.
 */
import { NgModule } from '@angular/core';
import {MdButtonModule, MdCheckboxModule, MdToolbarModule, MdMenuModule,
  MdIconModule, MdCardModule, MdGridListModule, MdInputModule} from '@angular/material';


@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, MdToolbarModule, MdInputModule,
    MdMenuModule, MdIconModule, MdCardModule, MdGridListModule],
  exports: [MdButtonModule, MdCheckboxModule, MdToolbarModule, MdInputModule,
    MdMenuModule, MdIconModule, MdCardModule, MdGridListModule],
})
export class CustomMaterialModule { }
