import { StudentModel } from "../student";

export class StudentMock {

    private _data: StudentModel = {
        id: 1,
        name: "Student"
    };

    public withId(id: number): StudentMock {
        this._data.id = id;
        return this;   
    }

    public withName(name: string): StudentMock {
     return this;
    }

    public model(): StudentModel {
        return this._data;
    }
}
