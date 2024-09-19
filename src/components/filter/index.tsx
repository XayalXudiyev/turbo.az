import { useState } from "react";
import ModelSelect from "./ModelSelect";
import MarkaSelect from "./MarkaSelect";
import ButtonGroup from "../ui/ButtonGroup";
import InputRange from "../ui/InputRange";
import CustomFilterComponent from "../../common/CustomFilterComponent";


const Filters = () => {

  const [selectedMarka, setSelectedMarka] = useState<string | null>(null);

  const handleMarkaChange = (value: string) => {
    setSelectedMarka(value);
  };

  return (

    <div className="w-full grid md:grid-cols-4 gap-5 my-5">
      <MarkaSelect onMarkaChange={handleMarkaChange} />
      <ModelSelect selectedMarka={selectedMarka} />
      <ButtonGroup />
      <ModelSelect selectedMarka={selectedMarka} />

      <CustomFilterComponent
        type={"select"}
        isLoading={true}
        placeholder={"plceholder"}
        onChange={() => { }}
        onClick={() => { }}
        value={'value'}

      />
      <InputRange />
    </div>

  )
}

export default Filters















