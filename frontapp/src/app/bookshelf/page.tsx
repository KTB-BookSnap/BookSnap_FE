import Card from "@/components/Card";
import Header from "@/components/header";

export default function BookShelf() {
  return (
    <div className="flex flex-col gap-[20px]">
      <Header />
      <div className="text-amber-950 text-4xl text-center">
        카드를 보고 싶은 책을 선택해주세요
      </div>
      <div className="w-full flex flex-row flex-wrap gap-[80px] items-center justify-center p-5">
        <Card src="/images/sampleImage.jpg" title="제목" id={1} />
        <Card src="/images/sampleImage.jpg" title="제목" id={1} />
        <Card src="/images/sampleImage.jpg" title="제목" id={1} />
        <Card src="/images/sampleImage.jpg" title="제목" id={1} />
        <Card src="/images/sampleImage.jpg" title="제목" id={1} />
      </div>
    </div>
  );
}
