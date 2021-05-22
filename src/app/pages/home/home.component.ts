import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	constructor(
		private fb1: FormBuilder,
	) { }


	emailValidator: string = '^[A-Za-z0-9._%+-]+@[A-Za-z0-9._%+-]{2,}[.][A-Za-z]{2,}$';
	postForm1: FormGroup;
	isRegistered: string;

	ngOnInit(): void {
		this.postForm1 = this.fb1.group({
			correo: ['', [Validators.required, Validators.pattern(this.emailValidator)]],
			nombre: ['', [Validators.required]],
			apellidoPaterno: ['', [Validators.required]],
			apellidoMaterno: ['', [Validators.required]],
			telefonoCelular: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],			
		});

		this.isRegistered = localStorage.getItem("isRegistered");

	}


	submit() {
		this.isRegistered = 'true';
		localStorage.setItem("isRegistered", "true");
	}
}
