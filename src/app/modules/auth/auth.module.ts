import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RegisterBoothComponent } from './register-booth/register-booth.component';
import { RegisterFarmerComponent } from './register-farmer/register-farmer.component';
import { RegisterSellerComponent } from './register-seller/register-seller.component';
import { LoginSellerComponent } from './login-seller/login-seller.component';
import { LoginFarmerComponent } from './login-farmer/login-farmer.component';
import { LoginBoothComponent } from './login-booth/login-booth.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        ForgotPasswordComponent,
        ResetPasswordComponent,
        RegisterBoothComponent,
        RegisterFarmerComponent,
        RegisterSellerComponent,
        LoginSellerComponent,
        LoginFarmerComponent,
        LoginBoothComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        HttpClientModule,
        TranslateModule
    ]
})
export class AuthModule { }

// // required for AOT compilation
// export function HttpLoaderFactory(http: HttpClient) {
//     return new TranslateHttpLoader(http);
// }
