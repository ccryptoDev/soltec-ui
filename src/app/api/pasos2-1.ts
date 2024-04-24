import axios from "axios";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    getInstanciaID(instanciaId: string) {
        // return axios.post('http://18.219.225.37:3333/api/swagger', {
        //   instanciaId: instanciaId,
        //   variables: {
        //     input: JSON.stringify({
        //       method: "GET",
        //       url: `/pasos/paso2-1/${instanciaId}`
        //     })
        //   }
        // }).then(response => {
        //   return JSON.parse(response.data.stringified);
        // });

        return new Promise((resolve, reject) => {
            resolve({
                is_cardan: true,
                tracker_tags: [
                  "I",
                  "N",
                  "D"
                ],
                tracker_tags_and_texts: {
                  I: [
                    "TL01.T.04.02.03.02.141.I",
                    "TL01.T.06.02.03.08.164.I",
                    "TL01.T.02.01.02.05.041.I"
                  ],
                  N: [
                    "TL01.T.06.01.01.01.004.M"
                  ],
                  D: [
                    "TL01.T.04.01.03.06.072.D",
                    "TL01.T.01.01.01.08.026.D",
                    "TL01.T.06.02.01.02.089.D",
                    "TL01.T.06.02.01.02.087.D"
                  ]
                }
            })
        })
      }
}

