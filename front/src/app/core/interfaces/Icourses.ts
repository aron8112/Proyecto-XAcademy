export interface Icourses
{
    id?: String,
    courseName: String,
    courseStartDate: Date,
    courseEndDate: Date,
    description: Text,
    shortDescription: Text,
    attendance?: Number,
    amountclasses: Number,
    schedule: String,
    deleted?: Boolean,
    visualized?: Boolean,
}