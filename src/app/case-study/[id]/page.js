import styles from "@/styles/caseStudy.module.css";
import Image from "next/image";
import Link from "next/link";
import github from "@/assets/github.png";
import link from "@/assets/link.png";
import { notFound } from "next/navigation";

async function getProject(id) {
  try {
    const url =
      process.env.NODE_ENV !== "development"
        ? `https://hridoysaha.vercel.app/api/portfolio/all/${id}`
        : `http://localhost:3000/api/portfolio/all//${id}`;

    let res = await fetch(url, {
      cache: "no-cache",
    });
    // Check if the response is valid
    if (!res.ok) {
      return null;
    }
    const data = await res.json();
    if (!data.success) {
      // Show nothing or handle error rendering here
      return null; // Or show a custom message like "Blog not found"
    }

    return data.result;
  } catch (err) {
    console.error("Error fetching projects:", err);
    return null;
  }
}

async function Page({ params }) {
  const project = await getProject(params.id);

  const technologies = () => {
    if (project) {
      const splitArr = project.technologies.split(", ");
      return splitArr;
    }
    return [];
  };

  return (
    <main className={styles.project__container}>
      {project ? (
        <article className={`${styles.case__study_wrapper} active`}>
          <div className={styles.nav__back_links}>
            <p>
              <Link href="/">Home</Link>
              {" > "}
              <Link href="/?portfolio=true">Portfolio</Link>
              {" > "}
              <Link href={`/case-study/${params.id}`}>Case Study</Link>
            </p>
          </div>

          <header>
            <h2 className={`h2`}>
              {project.title + " - " + project.sub_title}
            </h2>
          </header>

          <figure className={styles.article__img}>
            <Image
              src={project.image}
              alt={project.title}
              height={400}
              width={600}
            />
          </figure>

          <div className={styles.blog__article_content}>
            <div className={styles.content__part}>
              <h4 className="h4">Project Overview</h4>
              <p>{project.overview}</p>
            </div>

            <div className={styles.content__part}>
              <h4 className="h4">Key Feature</h4>
              {project.feature.map((item, ind) => (
                <div key={ind} className={styles.challange__wrapper}>
                  <h5 className="h5">{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>

            <div className={styles.content__part}>
              <h4 className="h4">Technologies</h4>
              <div className={styles.timeline__skills_wrapper}>
                {technologies().map((item, ind) => (
                  <div key={ind} className={styles.timeline__skill}>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* <div className={styles.content__part}>
              <h4 className="h4">Solutions</h4>
              {project.solutions.map((item, ind) => (
                <div key={ind} className={styles.challange__wrapper}>
                  <h5 className="h5">{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              ))}
            </div> */}

            <div className={styles.content__part}>
              <div className={styles.link__wrapper}>
                <Link
                  href={project.liveLink}
                  target="_blank"
                  className={styles.form__btn}
                >
                  <Image src={link} width={20} alt="GitHub" />
                  <span>Live</span>
                </Link>
                <Link
                  href={project.githubLink}
                  target="_blank"
                  className={styles.form__btn}
                >
                  <Image src={github} width={20} alt="GitHub" />
                  <span>Github</span>
                </Link>
              </div>
            </div>
          </div>
        </article>
      ) : null}
    </main>
  );
}

export default Page;

export async function generateMetadata({ params }) {
  const project = await getProject(params.id);

  if (!project) {
    return notFound();
  }

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "";
    }
    return text;
  };

  return {
    title: `${project?.title} - ${project?.sub_title}`,
    description: truncateText(project?.overview, 120),
    keywords: `${project?.keywords}`,
    openGraph: {
      title: `${project?.title} - ${project?.sub_title}`,
      description: truncateText(project?.overview, 120),
      url: `https://hridoysaha.vercel.app/case-study/${params.id}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project?.title} - ${project?.sub_title}`,
      description: truncateText(project?.overview, 120),
      images: [`${project?.image.src}`], // Same image for Twitter
    },
  };
}
