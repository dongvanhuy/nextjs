"use client";
import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import useSWR, { Fetcher } from "swr";

const ViewDetailBlogs = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const handleGoBack = () => {
    router.push("/blogs");
  };
  const fetcher: Fetcher<IBlog, string> = (url: string) =>
    fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `http://localhost:8000/blogs/${params.id}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";
  return (
    <div className="my-3">
      <Button className="my-3" onClick={() => handleGoBack()}>
        Go Back!
      </Button>
      <Card>
        <Card.Header>{data?.title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>{data?.content}</p>
            <footer className="blockquote-footer">
              Author: <cite title="Source Title">{data?.author}</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
};
export default ViewDetailBlogs;
