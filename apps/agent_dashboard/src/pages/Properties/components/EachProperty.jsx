import React from 'react'

export default function EachProperty({ data }) {
	console.log(data)
	return (
		<div className="card shadow" style={{ zIndex: 0}}>
			<div className="card-body">
				<div className="pricing-badge">
					<span className="badge text-white bg-primary">{data?.service?.name}</span>
				</div>
				<div className="product-img position-relative">
					<img
						src={data.image_urls[0]}
						alt=""
						class="img-fluid mx-auto d-block"
					/>
				</div>
				<div className="d-flex justify-content-between align-items-end mt-4">
					<div>
						<h5 className="mb-3 text-truncate">
							<a href="javascript: void(0);" className="text-dark fw-700">
								{data?.name}
							</a>
						</h5>
						<h5 className="my-0">
							<span className="me-2">
								<small>${data?.price}</small>
							</span>{' '}
							<b className='badge badge-sm bg-primary'>{data?.categorie?.name}</b>
						</h5>
					</div>
				</div>
				<p className="text-muted mb-0 mt-4">
					<div className="d-flex flex-wrap gap-2">
						<button
							type="button"
							class="btn btn-primary waves-effect btn-label waves-light"
						>
							<i class="bx bx-smile label-icon"></i> Edit
						</button>
						<button
							type="button"
							class="btn btn-danger waves-effect btn-label waves-light ml-4"
						>
							<i class="bx bx-block label-icon"></i> Delete
						</button>
					</div>
				</p>
			</div>
		</div>
	)
}
