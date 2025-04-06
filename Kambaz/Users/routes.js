const findCoursesForUser = async (req, res) => {
    try {
        if (!req.session.currentUser) {
            res.status(401).json({ message: "Not logged in" });
            return;
        }

        const user = await dao.findUserById(req.session.currentUser._id);
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        let courses;
        if (user.role === "FACULTY") {
            // Faculty can see all courses
            courses = courseDao.findAllCourses();
        } else {
            // Students and TAs only see enrolled courses
            courses = courseDao.findCoursesForEnrolledUser(user._id);
        }
        
        res.json(courses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error finding courses" });
    }
}; 