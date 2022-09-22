// no private properties in JS = tthis breaches the principle of encapsulation

// workaround 1 - use variables instead of properties

const Student = function (name) {
    let _name = name;
    let _laptop = null;
    let _courses = [];

    this.getName = ()=> _name;
    this.setName = (name)=> _name = name;
    this.getLaptop = ()=> _laptop;
    this.setLaptop = (laptop)=> _laptop = laptop;
    this.addCourse = (course) => _courses.push(course);
    this.removeCourse = (course) => _courses.splice(_courses.indexOf(course),1);
    this.getCourse = () => _courses;

    const Laptop = function(make, os){
        let _make = make;
        let _os = os;

        this.getMake = ()=> _make;
        this.setMake = (make) => _make = make;
        this.getOs = ()=> _os;
        this.setOs = (os) => _os = os;

    }
    const Courses = function(title, duration, price){
        let _title = title;
        let _duration = duration;
        let _price = price;

        this.getTitle = () => _title;
        this.setTitle = (title) => _title = title;
        this.getDuration = () => _duration;
        this.setDuration = (duration) => _duration = duration;
        this.getPrice = ()=> _price;
        this.setPrice = (price) => _price = price;
    }

    const iain = new Student('Iain');
    const richard = new Student('Richard')
    console.log(iain.getName());

    const laptop1 = new Laptop('HP', 'Windows');
    const laptop2 = new Laptop('Apple', 'MacOS');
    iain.setLaptop(laptop1);
    console.log(iain.getLaptop().getMake());
    
    const course1 = new Courses('BNTA Bootcamp', '12 Weeks', 0);
    const course2= new Course('Cooking 101', '5 weeks', 450);

    iain.addCourse(course2);
    iain.addCourse(course2);

    richard.addCourse(course1);

console.log('iain: ', iain);
console.log('richard: ', richard);

console.log(iain.getCourse().map((course)=> course.getTitle));
}
