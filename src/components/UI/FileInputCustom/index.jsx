import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useFormContext } from 'react-hook-form';

const FileInput = ({ accept, name, ...props }) => {
    const {
        register,
        setValue,
        formState: { errors },
        clearErrors,
    } = useFormContext();

    const onDrop = useCallback(
        (acceptedFiles) => {
            setValue(name, acceptedFiles);
        },
        [setValue, name]
    );

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        acceptedFiles,
        fileRejections,
    } = useDropzone({
        onDrop,
        accept,
    });

    return (
        <>
            <div className={`drag-n-drop ${isDragActive && 'drag-active'}`}>
                <div {...getRootProps()}>
                    <input
                        {...getInputProps()}
                        {...register(name)}
                        {...props}
                    />
                    <button
                        type='button'
                        className='drag-button'
                        onClick={() => clearErrors(name)}
                    >
                        Open File Dialog
                    </button>
                    <p>
                        Drag 'n' drop some files here, or click to select files
                    </p>
                </div>
            </div>
            {errors.files && <p>{errors.files.message}</p>}

            {acceptedFiles && (
                <div className=' '>
                    {acceptedFiles.map((file) => {
                        return (
                            <div key={file.name}>
                                <img
                                    src={URL.createObjectURL(file)}
                                    alt={file.name}
                                />
                            </div>
                        );
                    })}
                </div>
            )}

            {fileRejections.map(({ file, errors }) => (
                <li key={file.path}>
                    {file.path} - {file.size} bytes
                    <ul>
                        {errors.map((e) => (
                            <li key={e.code}>{e.message}</li>
                        ))}
                    </ul>
                </li>
            ))}
        </>
    );
};

export default FileInput;

// USAGE
// const methods = useForm({
//     resolver: yupResolver(schemaStep3),
// });
//
// const onSubmit = methods.handleSubmit((values) => {
//     console.log(values);
// });
//
// return (
//     <FormProvider {...methods}>
//         <Form id='form' onSubmit={onSubmit}>
//             <FileInputCustom accept={acceptFiles} name='files' />
//         </Form>
//     </FormProvider>
// );
