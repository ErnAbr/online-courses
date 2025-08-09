import courses from "./index.json";

export const getAllCourses = () => {
  return {
    data: courses,
    courseMap: courses.reduce((acc, course, interation) => {
      acc[course.id] = course;
      acc[course.id].index = interation;
      return acc;
    }, {}),
  };
};
