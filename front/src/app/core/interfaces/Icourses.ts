export interface Icourses
{
    id?: String,
    courseName: String,
    courseStartDate: Date,
    courseEndDate: Date,
    description: Text,
    shortDescription: Text,
    pathImage?: String | null,
    amountclasses: Number,
    schedule: String,
    deleted?: Boolean,
    visualized?: Boolean,
}