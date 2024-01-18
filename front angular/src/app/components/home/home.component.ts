import { Component, OnInit } from '@angular/core';
import { InterestServices } from '../../services/interest.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  plazo = 1;
  monto = 200000;
  valorPago=0;
  tasa:any;
  constructor(private interestService: InterestServices) {
   }

  ngOnInit() {
    /**
     * validaciones adicionales para la vista de los rangos 
     */
    const inputPlazo = document.getElementById("inputPlazo") as HTMLInputElement;
    const plazoOutput = document.getElementById("plazoOutput") as HTMLOutputElement;

    inputPlazo.addEventListener("input", function () {
      plazoOutput.textContent = inputPlazo.value + " meses";
    });

    const inputMonto = document.getElementById("inputMonto") as HTMLInputElement;
    const montoOutput = document.getElementById("montoOutput") as HTMLOutputElement;

    inputMonto.addEventListener("input", function () {
      montoOutput.textContent = "$" + inputMonto.value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    });
  }

  /**
   * metodo consultar la el calculo con la tasa de usura llamado a la api bachend 
   */
  enviarDatos() {
    this.interestService.consultarTipoTramite(this.plazo, this.monto).subscribe({
      next: response => {
        this.valorPago= response.usuryRate
        this.tasa = response.rate
      },
      error: error => {
        console.error(error);
      }
    })
  }

}
