import React from 'react'
import { useSelector } from 'react-redux'

export default function CreatePropertyForm() {
	const { categories, amenities, status, paymentTypes } = useSelector(
		(state) => state.view
	)

	return (
		<div className="row">
			<div className="col-12">
				<div className="card">
					<div className="card-header">
						<h4 className="card-title">Property Information</h4>
						<p className="card-title-desc">Fill all information below</p>
					</div>
					<div className="card-body">
						<form>
							<div className="row">
								<div className="col-sm-6">
									<div className="mb-3">
										<label for="title">Title</label>
										<input
											required
											id="title"
											name="title"
											type="text"
											className="form-control"
										/>
									</div>
									<div className="row">
										<div className="col-md-4">
											<div className="mb-3">
												<label for="bedrooms">Bedrooms</label>
												<input
													required
													id="bedrooms"
													name="bedrooms"
													type="number"
													className="form-control"
												/>
											</div>
										</div>
										<div className="col-md-4">
											<div className="mb-3">
												<label for="bedrooms">Sitting Rooms</label>
												<input
													required
													id="bedrooms"
													name="bedrooms"
													type="number"
													className="form-control"
												/>
											</div>
										</div>
										<div className="col-md-4">
											<div className="mb-3">
												<label for="bedrooms">Toilets</label>
												<input
													required
													id="bedrooms"
													name="bedrooms"
													type="number"
													className="form-control"
												/>
											</div>
										</div>
										<div className="col-md-4">
											<div className="mb-3">
												<label for="bathrooms">Bathrooms</label>
												<input
													required
													id="bathrooms"
													name="bathrooms"
													type="number"
													className="form-control"
												/>
											</div>
										</div>
									</div>
									<label className="text-muted">Location</label>
									<hr className="mt-1" />
									<div className="row">
										<div className="col-md-12">
											<div className="mb-3">
												<label for="bathrooms">Area</label>
												<input
													required
													id="price"
													name="price"
													type="number"
													className="form-control"
												/>
											</div>
										</div>
									</div>
									<label className="text-muted">Money Part</label>
									<hr className="mt-1" />
									<div className="row">
										<div className="col-md-6">
											<div className="mb-3">
												<label for="bathrooms">Rent</label>
												<input
													required
													id="price"
													name="price"
													type="number"
													className="form-control"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="mb-3">
												<label for="bathrooms">Agency Fee</label>
												<input
													required
													id="price"
													name="price"
													type="number"
													className="form-control"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="mb-3">
												<label for="bathrooms">Caution Fee</label>
												<input
													required
													id="price"
													name="price"
													type="number"
													className="form-control"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="mb-3">
												<label for="bathrooms">Legal Fee</label>
												<input
													required
													id="price"
													name="price"
													type="number"
													className="form-control"
												/>
											</div>
										</div>
									</div>
								</div>

								<div className="col-sm-6">
									<div className="mb-3">
										<label className="control-label">Type</label>
										<div className="card-body p-0  pb-2">
											<div className="d-flex flex-wrap gap-2">
												{categories.map((val) => {
													return (
														<button
															type="button"
															className="btn border-primary waves-effect waves-light"
														>
															{val?.name}
														</button>
													)
												})}
											</div>
										</div>
									</div>
									<div className="mb-3">
										<label className="control-label">Amenities</label>
										<div className="card-body p-0  pb-2">
											<div className="d-flex flex-wrap gap-2">
												{amenities.map((val) => {
													return (
														<button
															type="button"
															className="btn border-primary waves-effect waves-light"
														>
															{val?.name}
														</button>
													)
												})}
											</div>
										</div>
									</div>
									<div className="mb-3">
										<label className="control-label">Status</label>
										<div className="card-body p-0  pb-2">
											<div className="d-flex flex-wrap gap-2">
												{status.map((val) => {
													return (
														<button
															type="button"
															className="btn border-primary waves-effect waves-light"
														>
															{val?.name}
														</button>
													)
												})}
											</div>
										</div>
									</div>
									<div className="mb-3">
										<label className="control-label">Payment Type</label>
										<div className="card-body p-0  pb-2">
											<div className="d-flex flex-wrap gap-2">
												{paymentTypes.map((val) => {
													return (
														<button
															type="button"
															className="btn border-primary waves-effect waves-light"
														>
															{val?.name}
														</button>
													)
												})}
											</div>
										</div>
									</div>
									<div className="mb-3">
										<label for="productdesc">Product Description</label>
										<textarea
											className="form-control"
											id="productdesc"
											rows="5"
										></textarea>
									</div>
								</div>
							</div>

							<div className="d-flex flex-wrap gap-2">
								<button
									type="submit"
									className="btn btn-primary waves-effect waves-light"
								>
									Save Changes
								</button>
								<button
									type="button"
									className="btn btn-secondary waves-effect waves-light"
								>
									Cancel
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}
