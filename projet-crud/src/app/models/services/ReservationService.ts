/*import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs";

export class ReservationService extends Service {
    API_URL : string = "http://localhost:8080";
    API_ENTITY_NAME : string = "reservation";

    constructor(private readonly http:HttpClient, private readonly toastrService: ToastrService){
        super(toastrService);
    }

    create(reservation : Reservation) Observable<Reservation> {
        return this.http.post<OpenData>(`${this.API_URL}/${t.API_ENTITY_NAME}/`, reservation)
        .pipe(catchError(this.errorHandler));
    }
}*/