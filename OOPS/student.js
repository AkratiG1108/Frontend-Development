// Q1 – Student Result Processing (Classes + reduce)

class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        return this.marks.reduce((sum, val) => sum + val, 0) / this.marks.length;
    }

    getGrade() {
        const avg = this.calculateAverage();
        if (avg >= 90) return "A";
        if (avg >= 75) return "B";
        if (avg >= 50) return "C";
        return "F";
    }
}

const s1 = new Student("Akrati", [95, 90, 92]);
const s2 = new Student("Priya", [70, 75, 65]);
const s3 = new Student("Rohan", [40, 45, 50]);

console.table([
    { Name: s1.name, Avg: s1.calculateAverage(), Grade: s1.getGrade() },
    { Name: s2.name, Avg: s2.calculateAverage(), Grade: s2.getGrade() },
    { Name: s3.name, Avg: s3.calculateAverage(), Grade: s3.getGrade() }
]);
