function Status() {
    return (
        <div className="flex-grow-0 me-2 d-none d-lg-block" style={{ width: '250px' }}>
            <br />
            <br />
            <h3 className="course-status-header">Course Status</h3>
            <div className="header-buttons-div">
                <button type="button" className="unpublish-button"><i className="fa fa-ban" aria-hidden="true"></i>
                    Unpublish</button>
                <button type="button" className="published-button"><i className="fa fa-check-circle" aria-hidden="true"></i>
                    Published</button>
            </div>
            <br />
            <div>
                <button className="course-status-buttons"><a href="/Kanbas/Courses/Home/screen.html" className="course-status-buttons-links"><i
                    className="fa fa-download" aria-hidden="true"></i> Import Existing
                    Content</a></button>
                <br />
                <button className="course-status-buttons"><a href="/Kanbas/Courses/Home/screen.html" className="course-status-buttons-links"><i
                    className="fa fa-cloud-download" aria-hidden="true"></i> Import From
                    Commons</a></button>
                <br />
                <button className="course-status-buttons"><a href="/Kanbas/Courses/Home/screen.html" className="course-status-buttons-links"><i
                    className="fa fa-home" aria-hidden="true"></i> Choose Home Page</a></button>
                <br />
                <button className="course-status-buttons"><a href="/Kanbas/Courses/Home/screen.html" className="course-status-buttons-links"><i
                    className="fa fa-bar-chart" aria-hidden="true"></i> View Course
                    Stream</a></button>
                <br />
                <button className="course-status-buttons"><a href="/Kanbas/Courses/Home/screen.html" className="course-status-buttons-links"><i
                    className="fa fa-bullhorn" aria-hidden="true"></i> New Announcement</a></button>
                <br />
                <button className="course-status-buttons"><a href="/Kanbas/Courses/Home/screen.html" className="course-status-buttons-links"><i
                    className="fa fa-line-chart" aria-hidden="true"></i> New Analytics</a></button>
                <br />
                <button className="course-status-buttons"><a href="/Kanbas/Courses/Home/screen.html" className="course-status-buttons-links"><i
                    className="fa fa-bell" aria-hidden="true"></i> View Course
                    Notifications</a></button>
                <br />
            </div>
            <br />
            <h3 className="to-do-title">To Do</h3>
            <hr />
            <ol className="to-do-list">
                <li><a href="/Kanbas/Courses/Home/screen.html" className="to-do-list-text">Grade A1 - Makeup</a></li>
                <li><a href="/Kanbas/Courses/Home/screen.html" className="to-do-list-text">Grade A2 - Hair</a></li>
            </ol>
            <div className="coming-up-div">
                <h3 className="coming-up-title">Coming Up</h3>
                <a href="/Kanbas/Courses/Home/screen.html" className="view-calendar-button"><i className="fa fa-calendar" aria-hidden="true"></i> View
                    Calendar</a>
                <hr />
            </div>
            <ul className="fa-ul">
                <li><i className="fa fa-calendar" aria-hidden="true"></i><a href="/Kanbas/Courses/Home/screen.html" className="coming-up-items"> Lecture CS4550.12631.202410 Sep 7
                    at
                    11:45am</a></li>
                <li><i className="fa fa-calendar" aria-hidden="true"></i><a href="/Kanbas/Courses/Home/screen.html" className="coming-up-items"> Lecture CS4550.12631.202410 Sep 11
                    at
                    11:45am</a></li>
                <li><i className="fa fa-calendar" aria-hidden="true"></i><a href="/Kanbas/Courses/Home/screen.html" className="coming-up-items"> CS5610 06 SP23 Lecture Sep 11 at
                    6pm</a></li>
            </ul>
        </div>
    );
}

export default Status;