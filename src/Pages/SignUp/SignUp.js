import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    return (
        <div>
            <select {...register("category", { required: true })}>
                <option value="">Select...</option>
                <option value="A">Option A</option>
                <option value="B">Option B</option>
            </select>
        </div>
    );
};

export default SignUp;