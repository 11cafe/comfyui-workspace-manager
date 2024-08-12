import React from "react";
import { Flex, Button, Text, Spinner } from "@chakra-ui/react";

type PaginatorProps = {
  pageNumber: number;
  loading: boolean;
  noMoreData: boolean;
  onPageChange: (newPage: number) => void;
};

const Paginator: React.FC<PaginatorProps> = ({
  pageNumber,
  loading,
  noMoreData,
  onPageChange,
}) => {
  const handlePrevPage = () => {
    if (pageNumber > 1) {
      onPageChange(pageNumber - 1);
    }
  };

  const handleNextPage = () => {
    if (!noMoreData) {
      onPageChange(pageNumber + 1);
    }
  };

  return (
    <Flex justifyContent="center" alignItems="center" mt={2}>
      <Button
        onClick={handlePrevPage}
        isDisabled={pageNumber === 1 || loading}
        mr={2}
      >
        Previous
      </Button>
      <Text>{pageNumber}</Text>
      <Button
        onClick={handleNextPage}
        isDisabled={noMoreData || loading}
        ml={2}
      >
        Next
      </Button>
      {noMoreData && !loading && <Text ml={4}>No more data!</Text>}
      {loading && <Spinner ml={2} size={"xs"} color="gray" />}
    </Flex>
  );
};

export default Paginator;
