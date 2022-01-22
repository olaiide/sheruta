import React, { memo } from 'react'
import { IoMdAdd } from 'react-icons/io'
import { FaTrash } from 'react-icons/fa'

const ImageSelector = memo(({ file, onChange, removeFile, disabled, uid }) => {
	return (
		<div className="mb-4">
			<label
				htmlFor={uid || 'new-file'}
				className="btn border-primary p-2 border form-control d-flex justify-content-center shadow mb-2"
				style={{
					height: '250px',
					borderRadius: '10px',
					backgroundImage: `url(${file ? URL.createObjectURL(file) : ''})`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
				}}
			>
				{!disabled ? (
					<>
						<input
							type="file"
							id={uid || 'new-file'}
							hidden
							onChange={(e) => onChange(e.target.files)}
						/>
						<div className="align-self-center">
							<IoMdAdd size={30} className="mb-2" />
							<br />
							<h6>Add Image</h6>
						</div>
					</>
				) : null}
			</label>
			{file && (
				<div
					className="d-flex justify-content-center"
					onClick={() => removeFile(file)}
				>
					<small className="btn btn-sm btn-danger">
						<FaTrash /> Delete
					</small>
				</div>
			)}
		</div>
	)
})

export default function MultipleImgSelector({
	limit,
	urls,
	files,
	onChange,
	removeFile,
}) {
	return (
		<div className="row mb-5">
			<div className="col-12">
				<div className="row">
					{files.map((val, i) => {
						return (
							<div className="col-6 col-sm-4 col-lg-2" key={`img-${i}`}>
								<ImageSelector
									file={val}
									onChange={() => {}}
									removeFile={(e) => removeFile(e)}
									disabled
                                    uid={`item-${i}`}
								/>
							</div>
						)
					})}
					{files.length <= limit - 1 && (
						<div className="col-6 col-sm-4 col-lg-2">
							<ImageSelector onChange={(e) => onChange(e[0])} />
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
