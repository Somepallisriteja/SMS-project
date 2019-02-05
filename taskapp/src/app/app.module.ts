import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule, MatSortModule,  MatCardModule, MatButtonModule, MatCheckboxModule, MatInputModule, MatTabsModule, MatToolbarModule, MatExpansionModule, MatSnackBarModule, MatTooltipModule, MatSidenavModule, MatListModule, MatIconModule, MatRadioModule, MatPaginatorModule, MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonToggleModule, MatChipsModule, MatStepperModule, MatDialogModule, MatDividerModule, MatGridListModule, MatMenuModule, MatNativeDateModule, MatProgressBarModule, MatProgressSpinnerModule, MatRippleModule, MatSelectModule, MatSliderModule, MatSlideToggleModule, MatTreeModule} from '@angular/material';
import { AppComponent } from './app.component';
import { UsertableComponent } from './usertable/usertable.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    UsertableComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    

    

    MatTabsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatRadioModule,
    MatPaginatorModule,
    MatTableModule, // ToDo: check which of the following modules are neccessary
    
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatGridListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSortModule,
    MatTreeModule,
   
    


   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

