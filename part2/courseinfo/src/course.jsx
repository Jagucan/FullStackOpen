const Course = (props) => {
	const { courses } = props;

	return (
		<div>
			{courses.map((course) => (
				<div key={course.id}>
					<h2>{course.name}</h2>
					{course.parts.map((part) => (
						<p key={part.id}>
							{part.name} {part.exercises}
						</p>
					))}
					<strong>
						Total of{" "}
						{course.parts.reduce((sum, part) => sum + part.exercises, 0)}{" "}
						exercises
					</strong>
				</div>
			))}
		</div>
	);
};

export default Course;
