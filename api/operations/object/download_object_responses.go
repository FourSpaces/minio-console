// Code generated by go-swagger; DO NOT EDIT.

// This file is part of MinIO Console Server
// Copyright (c) 2023 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//

package object

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"io"
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/minio/console/models"
)

// DownloadObjectOKCode is the HTTP code returned for type DownloadObjectOK
const DownloadObjectOKCode int = 200

/*
DownloadObjectOK A successful response.

swagger:response downloadObjectOK
*/
type DownloadObjectOK struct {

	/*
	  In: Body
	*/
	Payload io.ReadCloser `json:"body,omitempty"`
}

// NewDownloadObjectOK creates DownloadObjectOK with default headers values
func NewDownloadObjectOK() *DownloadObjectOK {

	return &DownloadObjectOK{}
}

// WithPayload adds the payload to the download object o k response
func (o *DownloadObjectOK) WithPayload(payload io.ReadCloser) *DownloadObjectOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the download object o k response
func (o *DownloadObjectOK) SetPayload(payload io.ReadCloser) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *DownloadObjectOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	payload := o.Payload
	if err := producer.Produce(rw, payload); err != nil {
		panic(err) // let the recovery middleware deal with this
	}
}

/*
DownloadObjectDefault Generic error response.

swagger:response downloadObjectDefault
*/
type DownloadObjectDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.APIError `json:"body,omitempty"`
}

// NewDownloadObjectDefault creates DownloadObjectDefault with default headers values
func NewDownloadObjectDefault(code int) *DownloadObjectDefault {
	if code <= 0 {
		code = 500
	}

	return &DownloadObjectDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the download object default response
func (o *DownloadObjectDefault) WithStatusCode(code int) *DownloadObjectDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the download object default response
func (o *DownloadObjectDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the download object default response
func (o *DownloadObjectDefault) WithPayload(payload *models.APIError) *DownloadObjectDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the download object default response
func (o *DownloadObjectDefault) SetPayload(payload *models.APIError) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *DownloadObjectDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}