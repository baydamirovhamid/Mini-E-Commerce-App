﻿using MediatR;

namespace ECommerceAPI.Application.Features.Commands.Order.CreateOrder
{
    public class CreateOrderCommandRequest : IRequest<CreateOrderCommandResponse>
    {
        public string Description { get; set; }
        public string Address { get; set; }
    }
}
