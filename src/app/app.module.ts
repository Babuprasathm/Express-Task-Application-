import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './list/list.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';
import { TeammembersComponent } from './teammembers/teammembers.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { LoginComponent } from './login/login.component';
import { NavigationServiceService } from './Service/navigation-service.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ChartComponent } from './chart/chart.component';
import { AccumulationChartModule, PieSeriesService, AccumulationDataLabelService, AccumulationLegendService,
  AccumulationTooltipService } from '@syncfusion/ej2-angular-charts';
import { FilterPipe } from './filter.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { TimeDisplayComponent } from './time-display/time-display.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';





@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NavbarComponent,
    TeammembersComponent,
    AddTodoComponent,
    LoginComponent,
    ChartComponent,
    FilterPipe,
    TimeDisplayComponent,
    EditEmployeeComponent,
    AddEmployeeComponent,
    EditTodoComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatListModule,
    MatRadioModule,
    MatSnackBarModule ,
    MatSidenavModule,
    MatToolbarModule,
    AccumulationChartModule,ReactiveFormsModule,
    MatCardModule,
    FormsModule,


  ],
  providers: [NavigationServiceService,PieSeriesService,AccumulationDataLabelService,AccumulationLegendService,AccumulationTooltipService],
  bootstrap: [AppComponent],
})
export class AppModule { }
