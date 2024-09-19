import { Form, Select, Spin } from "antd";
import { Controller, useForm } from "react-hook-form"

type CustomFilterComponentPropsT = {
    type: "input" | "select" | "button" | "buttonGroup" | "autoComplete" | "inputRange",
    placeholder?: string,
    options?: { value: string; label: string }[],
    isLoading: boolean,
    onChange: (e: any) => void,
    onClick: (e: any) => void,
    value: string
}

const CustomFilterComponent: React.FC<CustomFilterComponentPropsT> = ({ type, placeholder, options, isLoading, onChange, onClick, value }) => {

    console.log({ type, placeholder, options, isLoading, onChange, onClick, value })

    if (isLoading) return <Spin />

    const { control } = useForm()

    const onfinish = (data: any) => console.log(data)

    return (
        <div>
            <Form layout="vertical" onFinish={onfinish} >
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={(() => (
                        <Select
                            placeholder="First name"
                            value={value}
                        />
                    ))}
                    name="firstName"
                />

            </Form>
        </div>
    )
}

export default CustomFilterComponent