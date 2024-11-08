/*import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs";


export class jeuService extends Service {

    API_URL : string = "http://localhost:8080/api";
    API_ENTITY_NAME : string = "jeu";

    constructor(private readonly hhtp:HttpClient, private readonly toastrService: ToastrService){}

	create(jeu:Jeu) Observable<Jeu> {
		return this.http.post<OpenData>('${this.API_URL}/${t.API_ENTITY_NAME}/`, jeu).pipe(catchError(this.errorHandler));
} */